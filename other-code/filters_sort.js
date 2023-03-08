import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import axios from 'axios';
import styles from '../styles/marketplaceContent.module.css';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import List from './miniComponents/list';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(() => ({

}));

const MarketplaceContent = ({ data }) => {
  const materialStyles = useStyles();
  const [listings, setListings] = useState(data);
  const [sortOption, setSortOption] = useState('price-low-to-high');
  const [filters, setFilters] = useState({
    minInvestment: '',
    maxInvestment: '',
    city: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // axios.get('/api/listings')
    //   .then(response => {
    //     setListings(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    console.log(data[0]);
  }, []);

  const sortListings = (option) => {
    setSortOption(option);

    let sortedListings = [];

    switch (option) {
      case 'price-low-to-high':
        sortedListings = listings.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-to-low':
        sortedListings = listings.sort((a, b) => b.price - a.price);
        break;
      case 'date-new-to-old':
        sortedListings = listings.sort((a, b) => new Date(b.dateReleased) - new Date(a.dateReleased));
        break;
      case 'date-old-to-new':
        sortedListings = listings.sort((a, b) => new Date(a.dateReleased) - new Date(b.dateReleased));
        break;
      default:
        sortedListings = listings;
        break;
    }

    setListings(sortedListings);
  };

  const filterListings = () => {
    let filteredListings = listings;

    if (filters.minInvestment) {
      filteredListings = filteredListings.filter(listing => listing.investment >= filters.minInvestment);
    }

    if (filters.maxInvestment) {
      filteredListings = filteredListings.filter(listing => listing.investment <= filters.maxInvestment);
    }

    if (filters.city) {
      filteredListings = filteredListings.filter(listing => listing.city.toLowerCase().includes(filters.city.toLowerCase()));
    }

    setListings(filteredListings);
  };

  const clearFilters = () => {
    setFilters({
      minInvestment: '',
      maxInvestment: '',
      city: ''
    });

    setListings(listings);
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

    console.log(searchTerm)

  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Marketplace
      </div>

      <div className={styles.filter}>
        <label htmlFor="min-investment">Min Investment:</label>
        <input type="number" id="min-investment" value={filters.minInvestment} onChange={(e) => setFilters({ ...filters, minInvestment: e.target.value })} />

        <label htmlFor="max-investment">Max Investment:</label>
        <input type="number" id="max-investment" value={filters.maxInvestment} onChange={(e) => setFilters({ ...filters, maxInvestment: e.target.value })} />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={filters.city} onChange={(e) => setFilters({ ...filters, city: e.target.value })} />

        <button onClick={filterListings}>Filter</button>
        <button onClick={clearFilters}>Clear</button>
      </div>

      <div className={styles.search}>
        <label htmlFor="search">Search by name:</label>
        <input type="text" id="search" value={searchTerm} onChange={handleSearch} />
        <button onClick={searchListings}>Search</button>
      </div>

      <div className={styles.sort}>
        <label htmlFor="sort-by">Sort by:</label>
        <select id="sort-by" value={sortOption} onChange={(e) => sortListings(e.target.value)}>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="date-new-to-old">Date: New to Old</option>
          <option value="date-old-to-new">Date: Old to New</option>
        </select>
      </div>

      <StyledFormControl>
        <InputLabel id="select-label">Select an option</InputLabel>
        <StyledSelect
          labelId="select-label"
          value={selectedValue}
          onChange={handleChange}
          autoWidth
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
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
            // <Link key={listing.id} href={`/properties/${listing.id}`}>
            <List item={listing} />
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketplaceContent