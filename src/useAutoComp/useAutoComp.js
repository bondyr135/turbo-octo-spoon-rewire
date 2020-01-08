import { useState, useEffect } from "react";
import axios from "axios";

const useAutoComp = (value, enabling) => {
  /////EXPECTING: value for filtering
  const [relevantItems, setRelevantItems] = useState([]);

  useEffect(() => {
    if (enabling || value.length > 1) {
      axios.get(`http://localhost:5000/search?q=anyValue`).then(async res => {
        const filteredItems = await res.data.filter(item => {
          return item.term
            .trim()
            .toLowerCase()
            .includes(value.trim().toLowerCase());
        });
        setRelevantItems(filteredItems);
      });
    }
  }, [value, enabling]);

  ///////RETURNED VALUE
  return [relevantItems.slice(0, 5), enabling];
};

export default useAutoComp;
