import type { RequestEvent } from "./$types";

export const actions = {
  default: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    return { message: `${firstname} ${lastname}, thanks for your feedback!` };
  },
};
