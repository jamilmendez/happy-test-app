import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { People } from "@/data";
import { PeopleTable } from "./components";
import { addPeople } from "@/redux/slices";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);
  return <PeopleTable />;
};
