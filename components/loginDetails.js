import React, { useState } from "react"
import styles from '../styles/loginDetails.module.css'

export default function LoginDetails() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  const signInClick = async (event) => {
    event.preventDefault();
    alert("Signed In")
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <span className={styles.highlight}>Welcome</span> Back
        </div>

        <form onSubmit={e => signInClick(e)}>
          <label for="email" className={styles.label}>Email</label>
          <input id="email" type="text" name="email" className={styles.input} value={formData.email} onChange={e => handleInputChange("email", e?.target?.value || "",)} />

          <label for="password" className={styles.label}>Password</label>
          <input id="password" type="text" name="password" className={styles.input} value={formData.password} onChange={e => handleInputChange("password", e?.target?.value || "",)} />
          <div className={styles.pageLink}>
            Forgot Password
          </div>

          <div className={styles.button}>
            <input type="submit" value="Sign In" className={styles.button_text} />
          </div>
        </form>
      </div>
    </div>
  )
}