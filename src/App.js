import React, { Component } from 'react';
import './App.css';
import { 
  AddCourse,CourseList 
} from './pages';
import courseList from './fixtures/courseList.json';

function App() {
  const [courses,setCourses] = React.useState(courseList);
  const [nav,setNav] = React.useState("/")
  let Component;
  let props = {};

  switch(nav) {
    case "/" :
      Component = CourseList;
      props = {
        ...props,
        courses
      }
      break
    case "/add-course":
      Component = AddCourse;
      props = {
        ...props,
        setCourses: setCourses
      }
      break;
    default:
      Component = CourseList;
      props = {
        ...props,
        courses
      }
      break;
  }

  return (
    <div className="App">
      <Component onNavigate= {setNav} {...props} />
    </div>
  );
}

export default App;
