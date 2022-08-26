import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from 'react-router-dom';
import Home from './components/home';
import routes from './components/routes/routes';

function App() {

	

  return (
   <Router>
	 
	 <Suspense fallback={<div>Loading...</div>}>
		<Routes>
		{routes.map((route, index) => {
			return <Route key={index} {...route} />
		})}
		</Routes>
	 </Suspense>
		
	 
   </Router>
  );
}

export default App;