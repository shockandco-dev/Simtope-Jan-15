import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { LPWAPage } from "./components/LPWAPage";
import { ZeroDataPage } from "./components/ZeroDataPage";
import { SatellitePage } from "./components/SatellitePage";
import { IoTAndESimPage } from "./components/IoTAndESimPage";
import { SimManagementPage } from "./components/SimManagementPage";
import { DeploymentServicesPage } from "./components/DeploymentServicesPage";
import { CompanyPage } from "./components/CompanyPage";
import { ContactPage } from "./components/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lpwa",
        element: <LPWAPage />,
      },
      {
        path: "/zero-data",
        element: <ZeroDataPage />,
      },
      {
        path: "/satellite",
        element: <SatellitePage />,
      },
      {
        path: "/iot-esim",
        element: <IoTAndESimPage />,
      },
      {
        path: "/sim-management",
        element: <SimManagementPage />,
      },
      {
        path: "/deployment-services",
        element: <DeploymentServicesPage />,
      },
      {
        path: "/company",
        element: <CompanyPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
