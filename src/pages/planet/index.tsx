import Detail from "./detail";
import Skeleton from "./skeleton";
import { Iplanet } from "../../services/planet/planet.module";
import { useLazyPlanetQuery } from "../../services/planet";
import { useEffect, useState } from "react";
import { getPlanetsWithReptileResident } from "../../services/planet/planet";

const Planet = () => {
   const [planetApi, { data: planet, isFetching, isLoading }] =
      useLazyPlanetQuery();
   const [planets, setPlanets] = useState<Iplanet[]>([]);
   const [isFetched, setIsFetched] = useState<boolean>(true);

   useEffect(() => {
      planetApi()
         .unwrap()
         .then((res) =>
            getPlanetsWithReptileResident(res)
               .then((planets: Iplanet[]) => {
                  setPlanets(planets);
                  setIsFetched(false);
               })
               .catch((error) => {
                  console.error(error.message);
                  setIsFetched(false);
               })
         )
         .catch(() => alert("Failed to fetch planets"));
   }, []);

   return (
      <div data-testid='planet'>
         {isFetched ? (
            <div className='space-y-1'>
               {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className='flex p-4' key={index}>
                     <Skeleton
                        className='w-full h-10'
                        fill='gray'
                        rounded='xl'
                     ></Skeleton>
                  </div>
               ))}
            </div>
         ) : (
            <ul>
               {planets.map((planet: Iplanet, index: number) => (
                  <li key={index}>
                     <Detail planet={planet} />
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default Planet;
