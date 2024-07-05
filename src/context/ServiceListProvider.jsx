import { useState } from "react";
import serviceListData from "../data/budgetData.json";
import ServiceListContext from "./ServiceListContext.jsx";
import UpdateServiceListContext from "./UpdateServiceListContext.js";

export default function ServiceListProvider({ children }) {
    const [serviceList, setServiceList] = useState(serviceListData);

    const handleSelectionChange = (productId, isSelected) => {
        let newServiceList = serviceList.map((service) => {
            if (service.id === productId) {
                service.selected = isSelected;
            }
            return service;
        });


        setServiceList(newServiceList);
    };

    return (
        <ServiceListContext.Provider value={serviceList}>
            <UpdateServiceListContext.Provider value={handleSelectionChange}>
                             {children}
            </UpdateServiceListContext.Provider>
        </ServiceListContext.Provider>
    );
}