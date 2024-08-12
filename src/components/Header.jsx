import styles from "./Header.module.css"
function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact-App</h1>
        <p>
            <a href="https://msjahani.ir">msjahani</a> | Creator of This Page
        </p>
    </div>
  )
}

export default Header