<script setup lang="ts">
import {
  Square2StackIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
import { IconButton, ToolTip } from "../../ui";

const clicked = () => {
  console.log("first");
};
</script>

<template>
  <header class="flex items-center justify-between h-12 px-2">
    <div class="flex items-center space-x-4">
      <img src="" alt="LOGO" />
      <nav class="flex items-center space-x-4">
        <ToolTip text="Browse">
          <IconButton @action="clicked"
            ><Square2StackIcon class="icon" />
          </IconButton>
        </ToolTip>

        <ToolTip text="More">
          <IconButton @action="clicked"
            ><EllipsisVerticalIcon class="icon" />
          </IconButton>
        </ToolTip>
      </nav>
    </div>

    <div class="flex items-center space-x-4">
      <ToolTip text="Search">
        <IconButton @action="clicked"
          ><MagnifyingGlassIcon class="icon" />
        </IconButton>
      </ToolTip>

      <ToolTip text="New Prime Loot">
        <IconButton @action="clicked"><TrophyIcon class="icon" /> </IconButton>
      </ToolTip>

      <ToolTip text="Profile">
        <IconButton @action="clicked"><UserIcon class="icon" /> </IconButton>
      </ToolTip>
    </div>
  </header>
</template>
