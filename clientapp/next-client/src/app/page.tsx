"use client";

import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import ApiHelper from "./ApiHelper";
import BarChart from "./components/BarChart";

export default function Home() {
  const [data, setData] = useState<JsonData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://localhost:3000/api/fetch-data"; 
        const responseData = await ApiHelper.get<JsonData[]>(apiUrl);
        setData(responseData);
      } catch (error) {
        alert("error fetching api");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Flowbite>
        <Navbar fluid={true} rounded={false}>
          <Navbar.Toggle />
          <DarkThemeToggle />
        </Navbar>

        <section className="bg-white dark:bg-gray-900">
          {/* <div className="flex justify-between px-4 pt-4">
            <h2>dashboard</h2>
            <h2>Welcome back client</h2>
          </div> */}

          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <div>
              {data ? (
               <BarChart inputdata={data} />
              ) : (
                <p>Loading data...</p>
              )}
            </div>
            {/* buttons */}

           

            
          </div>
        </section>
      </Flowbite>
    </>
  );
}
