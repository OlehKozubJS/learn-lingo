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
      try {
        const response = await axios.get("http://localhost:3000/load");
        const { data } = response;
        setTeachers(JSON.parse(data));
      } catch (error) {
        console.log(error.message);
        throw error;
      }
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
  }, [language, level, price, teachers]);

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
