
export const selectOptions = [
    { value: 'Fasting Glucose & HBA1C', label: 'Fasting Glucose & HBA1C' },
    { value: 'Hemogram', label: 'Hemogram' },
    { value: 'Urine Examination, Routine; URINE, R/E', label: 'Urine Examination, Routine; URINE, R/E' },
    { value: 'Thyroid function tests', label: 'Thyroid function tests' },
    { value: 'Liver & Kidney Panel', label: 'Liver & Kidney Panel' },
    { value: 'Iron & Lipid Panel', label: 'Iron & Lipid Panel' },
    { value: 'Lipid Profile', label: 'Lipid Profile' },
    { value: 'Vitamin D 25 – Hydroxy', label: 'Vitamin D 25 – Hydroxy' },
    { value: 'Apolipoproteins A1 & B', label: 'Apolipoproteins A1 & B' },
    { value: 'C-Reactive Protein, Cardio; HsCRP', label: 'C-Reactive Protein, Cardio; HsCRP' },
    { value: 'Cardio C-Reactive Protein', label: 'Cardio C-Reactive Protein' },
    { value: 'Vitamin B12; CYANOCOBALAMIN', label: 'Vitamin B12; CYANOCOBALAMIN' },
    { value: 'Vitamin B12', label: 'Vitamin B12' },
    { value: 'Physical Examination', label: 'Physical Examination' },
    { value: 'HbA1c :Glycosylated Hemoglobin', label: 'HbA1c :Glycosylated Hemoglobin' },
];

export const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: '.3rem',
    }),

    multiValue: (provided) => ({
        ...provided,
        borderRadius: '.5rem',
    }),

    multiValueRemove: (provided) => ({
        ...provided,
        borderRadius: '.5rem',
    }),

    placeholder: (provided) => ({
        ...provided,
        borderRadius: '.5rem',
    }),

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided,
            opacity,
            transition,
        };
    },
};
