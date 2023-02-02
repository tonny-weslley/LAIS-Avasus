import { InlineMenuModulo } from "../styled-components/Cards";

import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setModuloCategoria, setPage } from "../../redux/ModulosCategoria/slice";

const InlineModuloCategoria = (menu:any) => {
  const { selected } = useSelector(
    (state: RootState) => state.modulosCategoria
  );
  const dispatch = useDispatch();

  const handleSelected = (e: any) => {
    dispatch(setModuloCategoria(e.target.value));
    dispatch(setPage(1));
  };

  return (
    <InlineMenuModulo>
      <Select
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label="Age"
        onChange={handleSelected}
      >
        {menu.menu.map((item: any) => (
          <MenuItem
            value={item}
            key={item}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </InlineMenuModulo>
  );
};

export default InlineModuloCategoria;
