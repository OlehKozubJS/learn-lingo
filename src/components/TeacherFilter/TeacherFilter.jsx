import { useEffect, useState } from "react";

import { FilterSelect } from "./FilterSelect";

import styles from "./TeacherFilter.module.css";

const TeacherFilter = ({ onChange }) => {
  const [language, setLanguage] = useState("French");
  const [level, setLevel] = useState("A1 Beginner");
  const [price, setPrice] = useState("10 $");

  useEffect(() => {
    onChange({ language, level, price });
  }, [language, level, price]);

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const selectLevel = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  const selectPrice = (selectedPrice) => {
    setPrice(selectedPrice);
  };

  return (
    <div className={styles.TeacherFilter}>
      <FilterSelect
        title="Languages"
        options={[
          "any language",
          "French",
          "English",
          "German",
          "Ukrainian",
          "Polish",
        ]}
        select={selectLanguage}
        width="221px"
      />
      <FilterSelect
        title="Level of knowledge"
        options={[
          "any level",
          "A1 Beginner",
          "A2 Elementary",
          "B1 Intermediate",
          "B2 Upper-Intermediate",
          "C1 Advanced",
          "C2 Proficient",
        ]}
        select={selectLevel}
        width="250px"
      />
      <FilterSelect
        title="Price"
        options={["any price", "10 $", "20 $", "30 $", "40 $"]}
        select={selectPrice}
        width="135px"
      />
    </div>
  );
};

export { TeacherFilter };
