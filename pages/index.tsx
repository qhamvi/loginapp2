import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  const QUERY_ALL_USER = gql`
    query GetAllUsers{
        users{
            userName
            email
            password
            phoneNumber
        }
    }
`

const QUERY_BY_USERNAME = gql`
    query GetUser($userName: String!){
    user(userName: $userName)
    {
        userName
        password
    }
    }
`

const MUTATION_LOGIN = gql`
mutation Login($user: LoginUserInput!){
  login(loginUserInput: $user)
  {
    user{
      userName
    }
    access_token
  }
}
`
const {data} = useQuery(QUERY_ALL_USER);
const [fetchUser,{data: SearchedUser }] = useLazyQuery(QUERY_BY_USERNAME)
const [login, {data: loginResponse}] = useMutation(MUTATION_LOGIN)
const [searchedName, setSearchedName] = useState("")
  return (
    // <div className={styles.loginpage}>
    //   <div className={styles.form}>
    //     <form className={styles.loginform}>
 
    //       <input type="text" placeholder="username" />
    //       <input type="password" placeholder="password" />
    //       <button>login</button>
    //       <p className={styles.message}>
    //         Not registered? <a href="create">Create an account</a>
    //       </p>
         
          
    //     </form>
    //   </div>
    // </div>
    <div>
      {data && data.users.map((user: any)=>{
          return (
              <div>
                  <h1>Name: {user.userName}</h1>
                  <h1>Password: {user.password}</h1>
                  <h1>Phone:{user.phoneNumber}</h1>
                  <h1>Email: {user.email}</h1>
              </div>
          )
      })}
      <input onChange={(e)=>{setSearchedName(e.target.value)}}></input>
      <button onClick={()=>{fetchUser({variables:{userName: searchedName} })}}>Search</button>
      {SearchedUser && 
        <div>
            <h1>Name: {SearchedUser.user.userName}</h1>
            <h1>Password: {SearchedUser.user.password}</h1>
        </div>}
        <div>
            <label htmlFor="username">User Name</label>
            <input id="username"></input>
            <label htmlFor="password">Password</label>
            <input id="password"></input>
            <button>Login</button>
        </div>
    </div>
  );
};

export default Home;
