import React from "react";

function useStorageListener({ sincronize }) {

    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODO_v1') {
        console.log('huvo cambios en TODO_v1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      
      sincronize();
      setStorageChange(false);
    }
    
    return {
      show: storageChange,
      toggleShow,
    };
  }


export {useStorageListener};
