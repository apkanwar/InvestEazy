import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/marketplaceContent.module.css';
import List from './miniComponents/list';
import { FormControl, InputLabel, Select, MenuItem, Autocomplete, TextField, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextBox = styled(TextField)({
  [`& fieldset`]: {
    borderRadius: '24px',
  },
});

const sortOptions = [
  { label: 'Closing Date (Old to New)', value: 1 },
  { label: 'Closing Date (New to Old)', value: 2 }
];

export default function MarketplaceContent({ data }) {
  const [listings, setListings] = useState(data);
  const [selectedSortValue, setSelectedSortValue] = useState('0');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchListings();
  }, [searchTerm]);

  const handleSortChange = (event) => {
    setSelectedSortValue(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchListings = () => {
    let searchedListings = listings;

    if (searchTerm != '') {
      searchedListings = searchedListings.filter(listing => listing.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setListings(searchedListings);
    }
    else {
      setListings(data);
    }
  };

  const sortListings = () => {
    let sortedListings = [];

    switch (selectedSortValue) {
      case 1:
        sortedListings = data.sort((a, b) => getClosingDate(b.closingDate) - getClosingDate(a.closingDate));
        console.log(sortedListings)
        break;
      case 2:
        sortedListings = data.sort((a, b) => getClosingDate(a.closingDate) - getClosingDate(b.closingDate));
        console.log(sortedListings)
        break;
      default:
        sortedListings = data.sort((a, b) => getClosingDate(a.id) - getClosingDate(b.id));
        console.log(sortedListings)
        break;
    }

    setListings(sortedListings);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Marketplace
      </div>

      <div className={styles.sort}>
        <Autocomplete sx={{ minWidth: '80%', paddingRight: '1em' }}
          id="Search"
          freeSolo
          options={listings.map((option) => option.name)}
          renderInput={(params) => <StyledTextBox {...params}
            label="Search (By Name)"
            sx={{ borderRadius: '24px', backgroundColor: 'white' }}
            onChange={handleSearch}
            value={searchTerm}
          />}
        />

        <FormControl sx={{ minWidth: '20%' }}>
          <InputLabel id="sort-label">Sort</InputLabel>
          <Select
            labelId="sort-label"
            sx={{ borderRadius: '24px', backgroundColor: 'white' }}
            label="Sort"
            value={selectedSortValue}
            onChange={handleSortChange}
          >
            <MenuItem value='0'>
              <em>None</em>
            </MenuItem>
            {sortOptions.map((sortOption) => (
              <MenuItem key={sortOption.value} value={sortOption.value}>
                {sortOption.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={styles.portfolioContainer}>
        <div className={styles.header}>
          <div>
            Closing (days)
          </div>
          <div>
            Type
          </div>
          <div>
            Timeline (years)
          </div>
          <div>
            Min Investment
          </div>
          <div className={styles.lastHeader}>
            Funding Completed
          </div>
        </div>
        <div className={styles.list}>
          {listings.map(listing => (
            <Link key={listing.id} href={`/properties/${listing.id}`}>
              <List item={listing} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}