import { Form } from "./Form";
import {Input} from "../Input/Input"
import {Button} from "../Button/Button"
import {Textarea} from "../Textarea/Textarea"
import  {Label}  from "../Label/Label"
import {InsetInput} from "../InsetInput/InsetInput"

export default {
  title: "Core/Form",
  component: Form,
};

export const Default = ({ ...args }) => {
    // const options = [
    //     { name: "01" },
    //     { name: "02" },
    //     { name: "03" },
    //     { name: "04" },
    //     { name: "05" },
    //     { name: "06" },
    //   ];
  return (
    <>
      <Form
        className="flex flex-col gap-4 w-full max-w-sm"
        method="get"
        id="login"
        onSubmit={(e) => ([console.log("Submit"), e.preventDefault()])}
        { ...args }
      >
        <Form.Item error>
          <Label htmlFor="name">Username</Label>
          <Input placeholder="Your username..." id="name" />
        </Form.Item>
        <Form.Item>
          <Label htmlFor="email">Email</Label>
          <Input placeholder="Your Email..." id="email" type="email" />
        </Form.Item>
        {/* <Form.Item className="flex gap-2"> */}
          {/* <fieldset className="w-full">
        <Label htmlFor="month">Month</Label>
        <NativeSelect id="month">
          {options.map((opt, key) => (
            <option value={opt.name} key={key}>
              {opt.name}
            </option>
          ))}
        </NativeSelect>
      </fieldset> */}
          {/* <fieldset className="w-full">
         <Label htmlFor="year">Year</Label>
        <NativeSelect id="year">
          {options.map((opt, key) => (
            <option value={opt.name} key={key}>
              {opt.name}
            </option>
          ))}
        </NativeSelect>
      </fieldset> */}
        {/* </Form.Item> */}
        <Form.Item>
          <Label htmlFor="info">Additional information</Label>
          <Textarea id="info" />
        </Form.Item>
        <Button type="submit" form="login" value="Submit" fullWidth>
          Create account
        </Button>
      </Form>
    </>
  );
};

export const Sizing = ({...args}) => {
    // const options = [
    //     { name: "01" },
    //     { name: "02" },
    //     { name: "03" },
    //     { name: "04" },
    //     { name: "05" },
    //     { name: "06" },
    //   ];
    return (
        <>
    <Form
      className="flex flex-col gap-4 w-full max-w-sm"
      method="get"
      id="login"
      onSubmit={(e) => ([console.log("Submit"), e.preventDefault()])}
      size="sm"
      {...args}
    >
      <Form.Item error>
        <Label htmlFor="name">Username</Label>
        <Input placeholder="Your username..." id="name" />
      </Form.Item>
      <Form.Item>
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Your Email..." id="email" type="email" />
      </Form.Item>
      {/* <Form.Item className="flex gap-2">
        <fieldset className="w-full">
          <Label htmlFor="month">Month</Label>
          <NativeSelect id="month">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
        <fieldset className="w-full">
          <Label htmlFor="year">Year</Label>
          <NativeSelect id="year">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
      </Form.Item> */}
      <Form.Item>
        <Label htmlFor="info">Additional information</Label>
        <Textarea id="info" />
      </Form.Item>
      <Button type="submit" form="login" value="Submit" size="sm" fullWidth>
        Create account
      </Button>
    </Form>
    <Form
      className="flex flex-col gap-4 w-full max-w-sm"
      method="get"
      id="login"
      onSubmit={(e) => ([console.log("Submit"), e.preventDefault()])}
      size="lg"
      {...args}
    >
      <Form.Item error>
        <Label htmlFor="name">Username</Label>
        <Input placeholder="Your username..." id="name" />
      </Form.Item>
      <Form.Item>
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Your Email..." id="email" type="email" />
      </Form.Item>
      {/* <Form.Item className="flex gap-2">
        <fieldset className="w-full">
          <Label htmlFor="month">Month</Label>
          <NativeSelect id="month">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
        <fieldset className="w-full">
          <Label htmlFor="year">Year</Label>
          <NativeSelect id="year">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
      </Form.Item> */}
      <Form.Item>
        <Label htmlFor="info">Additional information</Label>
        <Textarea id="info" />
      </Form.Item>
      <Button type="submit" form="login" value="Submit" size="lg" fullWidth>
        Create account
      </Button>
    </Form>
  </>
    )
}

export const InsetItems = ({...args}) => {
    const options = [
        { name: "01" },
        { name: "02" },
        { name: "03" },
        { name: "04" },
        { name: "05" },
        { name: "06" },
      ];
      return (
        <>
        <Form
    className="flex flex-col gap-4 w-full max-w-sm"
    method="get"
    id="login"
    onSubmit={(e) => ([console.log("Submit"), e.preventDefault()])}
    {...args}
  >
    <Form.Item error>
      <InsetInput placeholder="Your username..." id="name">
        <InsetInput.Label>Username</InsetInput.Label>
      </InsetInput>
    </Form.Item>
    <Form.Item>
      <InsetInput placeholder="Your Email..." id="email" type="email">
        <InsetInput.Label>Email</InsetInput.Label>
      </InsetInput>
    </Form.Item>
    {/* <Form.Item className="flex gap-2">
      <fieldset className="w-full">
        <InsetNativeSelect id="month" label="Month">
          {options.map((opt, key) => (
            <option value={opt.name} key={key}>
              {opt.name}
            </option>
          ))}
        </InsetNativeSelect>
      </fieldset>
      <fieldset className="w-full">
        <InsetNativeSelect id="year" label="Year">
          {options.map((opt, key) => (
            <option value={opt.name} key={key}>
              {opt.name}
            </option>
          ))}
        </InsetNativeSelect>
      </fieldset>
    </Form.Item> */}
    <Form.Item>
      <Label htmlFor="info">Additional information</Label>
      <Textarea id="info" />
    </Form.Item>
    <Button type="submit" form="login" value="Submit" size="xl" fullWidth>
      Create account
    </Button>
  </Form>
        </>
      )
}