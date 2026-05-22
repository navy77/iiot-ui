<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
    FieldDescription,
  } from "$lib/components/ui/field/index.js";
  const id = $props.id();
</script>
<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Header>
    <Card.Title class="text-2xl">Login</Card.Title>
    <Card.Description>Enter your username below to login to your account</Card.Description>
  </Card.Header>
  <Card.Content>

    <form method="POST">
      <FieldGroup>
        <Field>
          <FieldLabel for="username-{id}">Usename</FieldLabel>
          <Input name="username" id="username-{id}" type="text" placeholder="admin" required />
        </Field>
        <Field>
          <div class="flex items-center">
            <FieldLabel for="password-{id}">Password</FieldLabel>
          </div>
          <Input name="password" id="password-{id}" type="password" required />
        </Field>
        <Field>
          <Button type="submit" class="w-full">Login</Button>
          <FieldDescription class="text-center">
            Don't have an account? <a href="##">Sign up</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>

  </Card.Content>
</Card.Root>