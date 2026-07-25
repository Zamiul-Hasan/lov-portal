import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import TeamHero from "../components/Team/TeamHero";
import TeamStats from "../components/Team/TeamStats";
import DepartmentFilter from "../components/Team/DepartmentFilter";
import MemberSearch from "../components/Team/MemberSearch";
import MemberGrid from "../components/Team/MemberGrid";

import members from "../data/members";

function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter((member) => {
    const departmentMatch =
      selectedDepartment === "All" ||
      member.department === selectedDepartment;

    const searchMatch =
      member.fullName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      member.displayName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      member.username
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      member.role
        .toLowerCase()
        .includes(search.toLowerCase());

    return departmentMatch && searchMatch;
  });

  return (
    <>
      <Navbar />

      <TeamHero />

      <TeamStats members={members} />

      <DepartmentFilter
        selected={selectedDepartment}
        onChange={setSelectedDepartment}
      />

      <MemberSearch
        value={search}
        onChange={setSearch}
      />

      <MemberGrid members={filteredMembers} />

      <Footer />
    </>
  );
}

export default Team;