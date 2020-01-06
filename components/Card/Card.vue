<template>
  <b-card
    :title="camper.title"
    :img-src="camper.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 22.5rem;"
    class="mb-2"
  >
    <div :class="[{heartbeat: animate}, {red: isFavorite}]"
          class="mc-card-heart heart-right">
      <svgicon class="heart"
                color="#F12471 #FFF"
                height="32"
                icon="heart_active"
                v-if="isFavorite"
                width="32"/>
      <svgicon :fill="true"
                color="#000 #FFF"
                height="32"
                icon="heart"
                v-else
                width="32"/>
    </div> 
    <div :class="['available-left', {heartbeat: animate}, {red: isFavorite}]"
          class="mc-card-available">
      <svgicon  color="#F12471 #FFF"
                height="32"
                icon="available"
                width="32"/>
    </div>      
    <b-row class="icons">
      <b-col cols="2">
        <svgicon class="mr-2"
          fill="true"
          icon="Seat"
          height="21px"
          stroke="black"
        />
        <span class="number">4</span>
      </b-col>
      <b-col cols="2">
        <svgicon class="mr-2"
          fill="true"
          icon="BedSolid"
          height="21px"
          stroke="black"
        />
        <span class="number bed">2</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="10" class="location">
        <span>{{camper.location}} ({{camper.kms}})</span>
      </b-col>
      <b-col cols="2" class="col-right">
        <span>{{camper.price}}.-</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="9">
        <svgicon v-for="n in 5"
          :key="'rating-' + n"
          icon="Star"
          height="14px"
          width="14px"
          class="dyn-rating-star mr-2"
          :color="(n > 3 ? '#c5cfd8' : '#242d3c')"
        /> 
        <span class="description">{{camper.description}}</span>       
      </b-col>
      <b-col class="col-right">
        <span class="period">{{camper.period}}</span>
      </b-col>
    </b-row>    
  </b-card>
</template>

<script>
import Svgicon from '@milianofede/svgicon/Svgicon.vue'
export default {
  components: {
    Svgicon
  },
  props: {
    camper: {
        type: Object,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
  },    
  data() {
    return {
      animate: false,
      currency: process.env.DEFAULT_CURRENCY,
    };
  }
}
</script>

<style scoped lang="scss">
  .mc-card-heart {
    position: absolute;
    margin-top: -5px;
    top: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.5s ease-out;

    &.heart-right {
      right: 0.5rem;
    }

    &.heart-left {
      left: 0.5rem;
    }

    &:hover {
      transform: scale(1.2);
    }

    &.heartbeat {
      animation: heartbeat 1s;
    }
  }
  .mc-card-available {
    position: absolute;
    margin-top: -5px;
    top: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.5s ease-out;

    &.available-right {
      right: 0.5rem;
    }

    &:hover {
      transform: scale(1.2);
    }

    &.heartbeat {
      animation: heartbeat 1s;
    }
  }  
  div {
    &.card-body {
      padding: 1rem;
    }
  }
  h4 {
    &.card-title {
      font-weight: 600;
      margin-bottom: .5rem;
    }    
  }  
  span {
    &.number {
      position: absolute;
      top: 5px;
      height: 23px;
      width: 10px;
      color: #242D3C;
      font-size: 16px;
      font-weight: 600;
      line-height: 23px;
      &.bed {
        right: 5px;
      }
    }
    &.description {
      font-size: 14px;	
      letter-spacing: 0.23px;	
      line-height: 20px; 
      vertical-align: bottom;  
      margin-left: 20px;   
    }
  }
  .location {
    span {
      font-size: 14px;	
      letter-spacing: 0.23px;	
      line-height: 20px;      
    }
  }
  .col-right {
    padding: 0 15px 0 0;
    text-align: right;
    span {
      height: 26px;	
      font-size: 20px;	
      font-weight: bold;	
      line-height: 28px;	
      &.period {
        font-size: 14px;	
        letter-spacing: 0.23px;	
        line-height: 20px;
        font-weight: normal;
      }
    }  
  }
  .icons {
    margin-bottom: .75rem
  }
</style>