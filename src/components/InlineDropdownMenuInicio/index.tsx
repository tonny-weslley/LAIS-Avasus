import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { setModuloSession } from "../../redux/ModulosSession/slice";
import { InlineMenuInicio } from "../styled-components/Cards";

const InlineDropdownMenuInicio = () => {
  const {selected} = useSelector((state: RootState) => state.modulosSession);
    const dispatch = useDispatch();
  const handleSelected = (e: any) => {
    console.log(e.target.value)
    dispatch(setModuloSession(e.target.value));
  };

  return (
    <InlineMenuInicio>
      <Select
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label="Age"
        onChange={handleSelected}
      >
        <MenuItem value={"populares"}>Populares</MenuItem>
        <MenuItem value={"avaliados"}>Avaliados</MenuItem>
        <MenuItem value={"recentes"}>Recentes</MenuItem>

      </Select>
    </InlineMenuInicio>
  );
};

export default InlineDropdownMenuInicio;
