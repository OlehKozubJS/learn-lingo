import { useEffect, useState } from "react";

import { FilterSelect } from "./FilterSelect";

import styles from "./TeacherFilter.module.css";

const TeacherFilter = ({ onChange }) => {
  const [language, setLanguage] = useState("any language");
  const [level, setLevel] = useState("any level");
  const [price, setPrice] = useState("any price");

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
        width="220px"
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
        options={[
          "any price",
          "from 10 to 19 $",
          "from 20 to 29 $",
          "from 30 to 39 $",
          "from 40 to 49 $",
        ]}
        select={selectPrice}
        width="200px"
      />
    </div>
  );
};

export { TeacherFilter };
