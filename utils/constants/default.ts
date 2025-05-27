export default (jobId: string, role: string) => {
  const info: Partial<SchemasInfo> = {
    fullname: "",
    email: "",
    phone: "",
    github: "",
    facebook: "",
  };

  const token: Partial<SchemasEmailToken> = { token: "" };

  const detail: SchemasDetail = {
    [jobId]: {
      [role]: {
        plan_in_the_next_12_months: "",
        how_do_people_think_about_you: "",
        specialized_answer: "",
        portfolio_link: "",
        link_CV_resume: "",
      },
    },
  };

  return { info, token, detail };
};
