<script lang="ts" module>
  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/main",
        items: [
          {
            title: "Overview",
            url: "/main",
          },
          {
            title: "Machine Data",
            url: "/data",
            isActive: true,
          },
          {
            title: "Machine Status",
            url: "/status",
          },
          {
            title: "Machine Alarm",
            url: "/alarm",
          },
          {
            title: "OEE",
            url: "/oee",
          },
          {
            title: "Device & Network",
            url: "/device",
          },
        ],
      },
      {
        title: "Getting Started",
        url: "#",
        items: [
          {
            title: "Installation",
            url: "#",
          },
          {
            title: "Configulation",
            url: "#",
          }
        ],
      },
      {
        title: "API Reference",
        url: "#",
        items: [
          {
            title: "Machine Data",
            url: "#",
          },
          {
            title: "Machine Status",
            url: "#",
          },
          {
            title: "Machine Alarm",
            url: "#",
          },
        ],
      },
      {
        title: "Community",
        url: "#",
        items: [
          {
            title: "Contribution Guide",
            url: "#",
          },
        ],
      },
    ],
  };
</script>
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { ComponentProps } from "svelte";
  let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>
<Sidebar.Root {...restProps} bind:ref>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton size="lg">
          {#snippet child({ props })}
            <a href="/main" {...props}>
              <div
                class="items-center justify-center rounded-lg"
              >
              </div>
              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-medium">Machine Monitoring System</span>
                <span class="">v1.0.0</span>
              </div>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.Menu>
        {#each data.navMain as item (item.title)}
          <Sidebar.MenuItem>
            <Sidebar.MenuButton class="font-medium">
              {#snippet child({ props })}
                <a href={item.url} {...props}>
                  {item.title}
                </a>
              {/snippet}
            </Sidebar.MenuButton>
            {#if item.items?.length}
              <Sidebar.MenuSub>
                {#each item.items as subItem (subItem.title)}
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton isActive={subItem.isActive}>
                      {#snippet child({ props })}
                        <a href={subItem.url} {...props}>{subItem.title}</a>
                      {/snippet}
                    </Sidebar.MenuSubButton>
                  </Sidebar.MenuSubItem>
                {/each}
              </Sidebar.MenuSub>
            {/if}
          </Sidebar.MenuItem>
        {/each}
      </Sidebar.Menu>
    </Sidebar.Group>
  </Sidebar.Content>
  <Sidebar.Rail />
</Sidebar.Root>