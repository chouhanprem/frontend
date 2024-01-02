import { useRoutes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Jobs from './components/Jobs';
import ViewJob from './components/ViewJob';
import Login from './components/Login';
import AddJob from './components/AddJob';
import PrivateComponent from './components/privateComponent';
import UpdateJob from './components/UpdateJob';
import PrivacyPolicy from './components/footerlinks/privacyPolicy';
import TermsOfService from './components/footerlinks/termsOfService';
import Disclaimer from './components/footerlinks/disclaimer';



export default function Router() {
    const routes = useRoutes([

        {
            element:<PrivateComponent/>,
            children:[
                    {
                        path:'/addjob',
                        element:<AddJob/>
                        
                    },
                    {
                        path:"/updatejob/:id",
                        element:<UpdateJob/>
                    },
                ]
         },

        {
            path:'/about',
            element:<About/>
      
          },
        {
            path:'/',
            element:<Home/>
        },
        {
            path:"/jobs",
            element:<Jobs/>
        },
        {
            path:"/viewjobs/:id",
            element:<ViewJob/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/privacy-policy",
            element:<PrivacyPolicy/>
        },
        {
            path:"/terms-of-service",
            element:<TermsOfService/>
        },
        {
            path:"/disclaimer",
            element:<Disclaimer/>
        }

        ])
        return routes;
    }