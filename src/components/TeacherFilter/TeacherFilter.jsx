import axios from "axios";

import { useEffect, useState } from "react";

import { FilterSelect } from "./FilterSelect";

import styles from "./TeacherFilter.module.css";

const TeacherFilter = ({ onChange }) => {
  const [teachers, setTeachers] = useState([]);
  const [language, setLanguage] = useState("any language");
  const [level, setLevel] = useState("any level");
  const [price, setPrice] = useState("any price");

  useEffect(() => {
    const getDataFromBackend = async () => {
      const response = await axios.get("http://localhost:3000/load");
      const { data } = response;
      setTeachers(JSON.parse(data));
    };
    getDataFromBackend();
  }, []);

  useEffect(() => {
    const filteredTeachers = teachers.filter(
      (teacher) =>
        (language === "any language" || teacher.languages.includes(language)) &&
        (level === "any level" || teacher.levels.includes(level)) &&
        (price === "any price" ||
          (Number(teacher.price_per_hour) >= Number(price.split(" ")[0]) &&
            Number(teacher.price_per_hour) < Number(price.split(" ")[0]) + 10))
    );
    onChange(filteredTeachers);
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
