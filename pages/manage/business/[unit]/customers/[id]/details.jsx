import { HeaderDetails } from "@/components/manage/business/HeaderDetails";
import { Button, Checkbox, Input, Select, TextInput } from "@mantine/core";

export default function Page() {
  return (
    <>
      <HeaderDetails />
      <section className="eg-form">
        <h2>Customer Information</h2>
        <article>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <TextInput defaultValue="Name" />
            </div>
          </div>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <Select
                placeholder="Pick one"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
            </div>
          </div>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <Checkbox label="Active" />
            </div>
          </div>
        </article>
      </section>
      <section className="eg-form">
        <h2>Contact Information</h2>
        <article>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <TextInput defaultValue="Name" />
            </div>
          </div>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <Select
                placeholder="Pick one"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
            </div>
          </div>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <Checkbox label="Active" />
            </div>
          </div>
        </article>
      </section>
      <section className="eg-form">
        <h2>People Information</h2>
        <article>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <TextInput defaultValue="Name" />
            </div>
          </div>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <Select
                placeholder="Pick one"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
            </div>
          </div>
          <div className="field">
            <div className="label">Name</div>
            <div className="value">
              <Checkbox label="Active" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
