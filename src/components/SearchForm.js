import React, { useState, useEffect } from "react";
import { Formik, Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";





const SearchForm = ({ errors, touched, status }) => {
  const [users, setUsers] = useState([])
  console.log(users);

  useEffect(() => {
    if (status) {
      setUsers([...users, status])
    }
  }, [status, users])

  return (

    <div>
      <Form>

        {touched.name && errors.name && (
          <p className="error" >{errors.name}</p>
        )}
        <Field type="input" name="name" placeholder="Name" />



        <button type="submit">Search</button>
      </Form>
      {users.map(name => (
        <p key={name.id}>{name.name}</p>


      ))}
    </div>

  )
}

const formikHOC = withFormik({
  mapsPropsToValues({ name }) {
    return {
      name: name || "",

    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Not a good input"),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${values.name}`, values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data.results);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
})

const onboardwithFormik = formikHOC(SearchForm)

export default onboardwithFormik;









