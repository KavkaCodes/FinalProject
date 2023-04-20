// Components
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
// Screens
import ScreenView from '../Screens/View/screenView'
// Pages

// Data
import tables from '../data/tables'
// Packages
import Head from 'next/head'
import { useState } from 'react';
import { Poppins } from "next/font/google";

// TODO: 
// Authentication
// Display all order on dashboard
// Proper comments

const poppins = Poppins(
  { 
    weight: ['400', '700'],
    subsets: ['latin'], 
  }
)
export default function Home() {
  
  // ScreenActive is the state that manages the screenview
  // Current Options are POS, Bill
  const [screenActive, setScreenActive] = useState("POS");
  // TableActive is the state that manages the selected table number
  const [tableActive, setTableActive] = useState("");
  // TablesLine is the state that manages the entry line of table
  const [tablesLine, setTablesLine] = useState(tables);
  // KotActive is the state that manages the selected kot number
  const [kotActive, setkotActive] = useState("");
  // CurrentOrder is the state that manages the order for the selected kot of the selected table
  // CurrentOrder remains empty {} if no kot is selected 
  const [currentOrder, setCurrentOrder] = useState({});
  // NewKot is the state that manages the array of items in a new kot
  const [newKot, setNewKot] = useState([]);

  return (
    <>
      <Head>
        <title>Point-of-sale</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx global>
          {
            `
              html {
                font-family: ${poppins.style.fontFamily};
              }
              .btn{
                font-family: ${poppins.style.fontFamily};
              }
            `
          }
        </style>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <main class="main">
        <div>
          {/* Header displays the current Screenview */}
          <Header state = {screenActive}></Header>
          {/* 
            Body contains Navbar and ScreenView.   
          */}
          <div class="body">
            {/* 
              Navbar lets you select between various screenviews
              Current Options are POS, Bill
              Planned Options are Dashboard, Fast Billing, Customer Service and User Profile 
              ScreenActive is passed to set the screen view according to the navbar selection  
              TableActive, KotActive, CurrenOrder, NewKot are passed to reset to null value on changing 

            */}
            <Navbar screenActive = {[screenActive, setScreenActive]} tableActive = {[tableActive,setTableActive]}  kotActive = {[kotActive,setkotActive]} currentOrder = {[currentOrder, setCurrentOrder]} newKot = {[newKot, setNewKot]}></Navbar>
            
            <ScreenView screenActive = {[screenActive, setScreenActive]} tableActive = {[tableActive,setTableActive]} tablesLine = {[tablesLine, setTablesLine]} kotActive = {[kotActive,setkotActive]} currentOrder = {[currentOrder, setCurrentOrder]} newKot = {[newKot, setNewKot]} >
            </ScreenView>
          </div>
        </div>
        {/* 
          Footer displays my design stamp and the selected table*/}
        <Footer params={tableActive}></Footer>
      </main>
    </>
  )
}




