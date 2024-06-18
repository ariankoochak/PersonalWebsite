import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function CloudPage() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
    useEffect(()=>{
         window.location.href =
             "https://mega.nz/folder/yQ11XJ6a#HKqEfDjBETz9vbxFVvbBMA";
    },[])
    const handleClickGoToCloud = ()=>{
        window.location.href = "https://mega.nz/folder/yQ11XJ6a#HKqEfDjBETz9vbxFVvbBMA";
    }
  return (
      <section className="main">
          <section className="container">
              <div className={`cloud-div ${mainColor.backgroundColorDiv} ${mainColor.color}`} onClick={handleClickGoToCloud}>
                      Go To Cloud
              </div>
          </section>
      </section>
  );
}
