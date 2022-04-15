import styles from "../styles/Home.module.css";
function CreateAccount() {
  return (
    <>
      <div className={styles.loginpage}>
        <div className={styles.form}>
        
          <form className={styles.registerform}>
            <p className={styles.register}>Register</p>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className={styles.message}>
              Already registered? <a href="http://localhost:3000/">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateAccount;
