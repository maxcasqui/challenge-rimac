import React, { createContext, useContext, useState } from 'react';
import { Plan } from '../types/Plan';

export type InsuranceUserData = {
    documentType?: string;
    documentNumber?: string;
    phoneNumber?: string;
    name?: string;
    lastName?: string;
    birthDay?: string;
    age: number;
};

type InsuranceContextType = {
    userData: InsuranceUserData | null;
    setUserData: (data: InsuranceUserData) => void;
    selectedPlan: Plan | null;
    setSelectedPlan: (plan: Plan) => void;
};

const InsuranceContext = createContext<InsuranceContextType>({
    userData: null,
    setUserData: () => { },
    selectedPlan: null,
    setSelectedPlan: () => { },
});

export const InsuranceProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<InsuranceUserData | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    return (
        <InsuranceContext.Provider value={{ userData, setUserData, selectedPlan, setSelectedPlan }}>
            {children}
        </InsuranceContext.Provider>
    );
};

export const useInsurance = () => useContext(InsuranceContext);
