import FileInputField from "@/components/molecules/form/file-input-field";
import InputField from "@/components/molecules/form/input-field";
import TextAreaField from "@/components/molecules/form/text-area-field";
import FooterSection from "@/components/organism/section/footer";
import Header from "@/components/templates/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import Logo from "@/components/ui/logo";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import LAUNCHPAD_NAVIGATION_DATA from "@/data/launchpad/launchpad.navigation.data";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

const STEPS = [1, 2, 3, 4, 5];

const TokenExchangeScreen = () => {
  const form = useForm();

  return (
    <section className="overflow-visible mx-auto max-w-[1440px]">
      <Header routes={LAUNCHPAD_NAVIGATION_DATA} />
      <div className="h-full p-4">
        <Card className="w-full max-w-[500px] mx-auto mt-[50px]">
          <CardHeader className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center justify-center gap-2 bg-[#1C1B1B] p-3 rounded-md max-w-[180px]">
              <Logo />
              <span>Token Creator</span>
            </div>
            <Stepper defaultValue={0}>
              {STEPS.map((step) => (
                <StepperItem key={step} step={step} className="not-last:flex-1">
                  <StepperTrigger>
                    <StepperIndicator asChild>{step}</StepperIndicator>
                  </StepperTrigger>
                  {step < STEPS.length && <StepperSeparator />}
                </StepperItem>
              ))}
            </Stepper>
          </CardHeader>
          <div className="p-4">
            <Form {...form}>
              <form className="flex flex-col gap-4">
                <FileInputField label="Token Logo" name="token-logo" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <InputField
                    name="token-name"
                    label="Token Name"
                    placeholder="Ex: Doge Coin"
                  />

                  <InputField
                    name="token-symbol"
                    label="Token Symbol"
                    placeholder="Ex: DOGE"
                  />
                </div>

                <TextAreaField
                  label="Description"
                  name="description"
                  placeholder="Describe what your token stands for"
                  className={cn("h-[200px]")}
                />
              </form>
            </Form>
          </div>
          <CardFooter className="flex justify-end">
            <Button>Next</Button>
          </CardFooter>
        </Card>
      </div>
      <FooterSection />
    </section>
  );
};

export default TokenExchangeScreen;
