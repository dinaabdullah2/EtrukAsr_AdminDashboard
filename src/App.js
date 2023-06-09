import Home from "./pages/home/Home";
import Single from "./pages/single/OneCase";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'swiper/css';
import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Login from "./components/Login/Login";
import { AuthContext } from "./context/AuthContext";
import ListCategory from "./pages/list/ListCategory";
import ListDonation from "./pages/list/ListDonationType";
import NewCase from "./pages/new/NewCase";
import NewCategory from "./pages/new/NewCategory"
import NewDonationType from "./pages/new/NewDonationType";
import ListData from "./pages/list/ListData";
import OneCase from "./pages/single/OneCase";
import UpdateCase from "./pages/update/UpdateCase";
import OneCategory from "./pages/single/OneCategory";
import UpdateCategoy from "./pages/update/UpdateCategoy";
import OneDonationType from "./pages/single/OneDonationType";
import UpdateDonationType from "./pages/update/UpdateDonationType";
import ListDonationType from "./pages/list/ListDonationType";
import ListDonations from "./pages/list/ListDonations";
import OneDonation from "./pages/single/OneDonation";
import ListVolunteer from "./pages/list/ListVolunteer";
import OneVolunteer from "./pages/single/OneVolunteer";
import NewEvent from "./pages/new/NewEvent";
import OneEvent from "./pages/single/OneEvent";
import ListEvent from "./pages/list/ListEvent";
import ListAcution from "./pages/list/ListAcution";
import UpdateEvent from "./pages/update/UpdateEvent";
import UpdateAcution from "./pages/update/UpdateAcution";
import { useState } from "react";
import UpdateGoldPrice from "./pages/update/UpdateGoldPrice";
import OneCharity from "./pages/single/OneCharity";
import ListCharity from "./pages/list/ListCharity";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext)

  // useEffect(() => {
  //   if(localStorage.getItem('User')!==0){
  //     localStorage.clear()
  //   }

  // },[]);

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={

                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="cases">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListData />
                  </RequireAuth>
                }
              />
              <Route
                path=":caseId"
                element={
                  <RequireAuth>
                    <OneCase />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewCase />
                  </RequireAuth>


                }
              />
            </Route>
            <Route path="edit">
              <Route
                path=":updateId"
                element={
                  <UpdateCase />
                }
              />
            </Route>
            <Route path="categories">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListCategory />
                  </RequireAuth>


                }
              />
              <Route
                path=":categoryId"
                element={
                  <RequireAuth>
                    <OneCategory />
                  </RequireAuth>


                }
              />

              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewCategory />
                  </RequireAuth>


                }
              />
            </Route>
            <Route path="editCategory">
              <Route
                path=":updateCategoryId"
                element={
                  <UpdateCategoy />
                }
              />
            </Route>




            <Route path="donaionTypes">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListDonationType />
                  </RequireAuth>



                }
              />
              <Route
                path=":donationId"
                element={
                  <RequireAuth>
                    <OneDonationType />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewDonationType />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="editType">
              <Route
                path=":updateTypeId"
                element={
                  <UpdateDonationType />
                }
              />
            </Route>

            <Route path="donation">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListDonations />
                  </RequireAuth>



                }
              />
              <Route
                path=":donationId"
                element={
                  <RequireAuth>
                    <OneDonation />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewDonationType />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="volunteer">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListVolunteer />
                  </RequireAuth>



                }
              />
              <Route
                path=":volunteerId"
                element={
                  <RequireAuth>
                    <OneVolunteer />
                  </RequireAuth>
                }
              />

            </Route>
            <Route path="event">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListEvent />
                  </RequireAuth>
                }
              />
              <Route
                path=":eventId"
                element={
                  <RequireAuth>
                    <OneEvent />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewEvent />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="editEvent">
              <Route
                path=":updateEventId"
                element={
                  <UpdateEvent />
                }
              />
            </Route>
            <Route path="acution">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListAcution />
                  </RequireAuth>
                }
              />
             
            </Route>
            <Route path="editAcution">
              <Route
                path=":updateAcutionId"
                element={
                  <UpdateAcution />
                }
              />
            </Route>
            <Route
                path="gold"
                element={
                  <RequireAuth>
                    <UpdateGoldPrice />
                  </RequireAuth>
                }
              />
               <Route path="charities">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListCharity />
                  </RequireAuth>
                }
              />
              <Route
                path=":charityId"
                element={
                  <RequireAuth>
                    <OneCharity />
                  </RequireAuth>
                }
              />
           
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
