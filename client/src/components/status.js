import React, { Fragment, useEffect, useState } from "react";


const ShowStatus = () => {

  const [status, setStatus] = useState([]);

  const getStatus = async () => {
    try {
      const response = await fetch("/api/")
      const jsonData = await response.json()

      setStatus(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getStatus();
  }, []);

  return <Fragment>
    <p>
      {status.message}
    </p>
  </Fragment>
}

export default ShowStatus;
