<template>
  <Page title="Create a countdown">
    <form class="form">
      <fieldset class="fieldset">
        <label for="name" class="label">Name</label>
        <input id="name" v-model="name" class="input" />
      </fieldset>
      <fieldset class="fieldset">
        <label for="date" class="label">Date</label>
        <input
          id="date"
          v-model="date"
          :min="`${currentYear}-01-01`"
          :max="`${currentYear}-12-31`"
          type="date"
          class="input"
        />
      </fieldset>
      <fieldset v-if="formProtection" class="fieldset">
        <NuxtLink :to="generatedCountdown" class="button">Go to countdown</NuxtLink>
      </fieldset>
    </form>
  </Page>
</template>

<script>
import Page from '@/components/layout/Page'
import { currentYear, currentMonth, currentDay } from '~/shared/date'

export default {
  components: {
    Page
  },
  data() {
    return {
      name: 'Countdown',
      date: `${currentYear()}-${currentMonth() < 10 ? `0${currentMonth()}` : currentMonth()}-${
        currentDay() < 10 ? `0${currentDay()}` : currentDay()
      }`,
      currentYear: currentYear()
    }
  },
  head() {
    return {
      title: 'Create a countdown - Countdown Works'
    }
  },
  computed: {
    generatedCountdown() {
      return `/countdowns/${this.name}-${this.date}`
    },
    formProtection() {
      if (!this.name.includes('-') && this.date) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 10px 20px;

  .fieldset {
    @include flex(column);

    border: 0;
    margin: 25px 0;

    .label {
      color: hsl(0, 0%, 35%);
      font-size: 2em;
      margin: 15px 0;
    }

    .input,
    .select {
      border: 2px solid hsl(0, 0%, 55%);
      border-radius: 5px;
      color: hsl(0, 0%, 0%);
      width: 100%;
      @include mobile {
        font-size: 1.2em;
        padding: 10px;
      }
      @include desktop {
        font-size: 1.3em;
        padding: 5px 10px;
      }
    }

    .button {
      @include hide-link-styles;

      border: 2px solid hsl(0, 0%, 55%);
      border-radius: 8px;
      color: hsl(0, 0%, 0%);
      cursor: pointer;
      font-size: 1.3em;
      margin: 20px auto;
      padding: 7px;
      text-align: center;
      transition: 0.25s all;
      width: 100%;

      &:hover {
        border-radius: 0;
      }
    }
  }
}
</style>
