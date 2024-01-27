import { useEffect, useState } from "react";

import { FilterSelect } from "./FilterSelect";

import styles from "./TeacherFilter.module.css";

const TeacherFilter = ({ onChange }) => {
  const [language, setLanguage] = useState("French");
  const [levelOfKnowledge, setLevelOfKnowledge] = useState("A1 Beginner");
  const [price, setPrice] = useState("10 $");

  useEffect(() => {
    onChange({ language, levelOfKnowledge, price });
  }, [language, levelOfKnowledge, price]);

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const selectLevelOfKnowledge = (selectedLevelOfKnowledge) => {
    setLevelOfKnowledge(selectedLevelOfKnowledge);
  };

  const selectPrice = (selectedPrice) => {
    setPrice(selectedPrice);
  };

  return (
    <div className={styles.TeacherFilter}>
      <FilterSelect
        title="Languages"
        options={["French", "English", "German", "Ukrainian", "Polish"]}
        select={selectLanguage}
        width="221px"
      />
      <FilterSelect
        title="Level of knowledge"
        options={[
          "A1 Beginner",
          "A2 Elementary",
          "B1 Intermediate",
          "UB2 Upper-Intermediate",
        ]}
        select={selectLevelOfKnowledge}
        width="250px"
      />
      <FilterSelect
        title="Price"
        options={["10 $", "20 $", "30 $", "40 $"]}
        select={selectPrice}
        width="124px"
      />
    </div>
  );
};

export { TeacherFilter };
