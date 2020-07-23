import React, { useState, useEffect, createContext } from "react"

import useGetUser from "hooks/useGetUser"

export const SchoolContext = createContext(null)

const SchoolProvider = ({ children }) => {
  const { userErr, userLoad, userData } = useGetUser()
  const [school, setSchool] = useState(null)

  useEffect(() => {
    if (userData) {
      setSchool({
        id: userData.getUser.schoolId,
        name: userData.getUser.schoolName,
      })
    }

    return () => {
      setSchool(null)
    }
  }, [userData, userLoad])

  return (
    <SchoolContext.Provider
      value={{
        school,
        setSchool,
      }}
    >
      {children}
    </SchoolContext.Provider>
  )
}

export default SchoolProvider