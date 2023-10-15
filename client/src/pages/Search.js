import React, { useState } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const key = "523532";

const SearchComponent = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
    fetch(`https://www.theaudiodb.com/api/v1/json/${key}/search.php?s=${value}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
    </Space>
  );
};

export default SearchComponent;