<script setup lang="ts">
import {
  Square2StackIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
import { IconButton, ToolTip } from "../../ui";
import IconBadge from "../../ui/IconBadge/IconBadge.vue";

const clicked = () => {
  console.log("first");
};
</script>

<template>
  <header class="flex items-center justify-between h-12 px-2">
    <div class="flex items-center space-x-4">
      <img src="" alt="LOGO" />
      <nav class="flex items-center space-x-4">
        <ToolTip :text="$t('header.browse')">
          <IconButton @action="clicked"
            ><Square2StackIcon class="icon" />
          </IconButton>
        </ToolTip>

        <ToolTip :text="$t('header.more')">
          <IconButton @action="clicked"
            ><EllipsisVerticalIcon class="icon" />
          </IconButton>
        </ToolTip>
      </nav>
    </div>

    <div class="flex items-center space-x-4">
      <ToolTip :text="$t('header.search')">
        <IconButton @action="clicked"
          ><MagnifyingGlassIcon class="icon" />
        </IconButton>
      </ToolTip>

      <ToolTip :text="$t('header.loot')">
        <IconBadge>
          <IconButton @action="clicked"
            ><TrophyIcon class="icon" />
          </IconButton>
        </IconBadge>
      </ToolTip>

      <button
        class="py-1 px-2 text-sm font-semibold rounded bg-btn-primary hover:brightness-95"
      >
        {{ $t("header.logIn") }}
      </button>

      <button
        class="py-1 px-2 text-sm text-white font-semibold rounded bg-dark-purple hover:brightness-95"
      >
        {{ $t("header.signUp") }}
      </button>

      <ToolTip :text="$t('profile')">
        <IconButton @action="clicked"><UserIcon class="icon" /> </IconButton>
      </ToolTip>
    </div>
  </header>
</template>
