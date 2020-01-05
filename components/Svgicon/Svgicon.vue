<template>
  <component :is="icon"
             :class="'svg-icon' + classes"
             :style="style" />
</template>

<script>
  const components = {
    AClass: () => import('./icons/AClass.svg?inline'),
    AClassTransparent: () => import('./icons/AClassTransparent.svg?inline'),
    ArrowDown: () => import('./icons/ArrowDown.svg?inline'),
    ArrowLeft: () => import('./icons/ArrowLeft.svg?inline'),
    ArrowRight: () => import('./icons/ArrowRight.svg?inline'),
    ArrowTo: () => import('./icons/ArrowTo.svg?inline'),
    Bed: () => import('./icons/Bed.svg?inline'),
    BookFill: () => import('./icons/BookFill.svg?inline'),
    Cal: () => import('./icons/Cal.svg?inline'),
    CampingBus: () => import('./icons/CampingBus.svg?inline'),
    CampingBusTransparent: () => import('./icons/CampingBusTransparent.svg?inline'),
    Caravan: () => import('./icons/Caravan.svg?inline'),
    CaravanTransparent: () => import('./icons/CaravanTransparent.svg?inline'),
    Carseat: () => import('./icons/Carseat.svg?inline'),
    HollowCircle: () => import('./icons/HollowCircle.svg?inline'),
    ClarifyDetailsAndConfirm: () => import('./icons/ClarifyDetailsAndConfirm.svg?inline'),
    ClarifyDetailsAndConfirmColor: () => import('./icons/ClarifyDetailsAndConfirmColor.svg?inline'),
    Coachbuilt: () => import('./icons/Coachbuilt.svg?inline'),
    CoachbuiltTransparent: () => import('./icons/CoachbuiltTransparent.svg?inline'),
    Delete: () => import('./icons/Delete.svg?inline'),
    DiscussIssue: () => import('./icons/DiscussIssue.svg?inline'),
    DotFill: () => import('./icons/DotFill.svg?inline'),
    DotOutline: () => import('./icons/DotOutline.svg?inline'),
    FairAndLocal: () => import('./icons/FairAndLocal.svg?inline'),
    FairAndLocalColor: () => import('./icons/FairAndLocalColor.svg?inline'),
    Flash2: () => import('./icons/Flash2.svg?inline'),
    Handover: () => import('./icons/Handover.svg?inline'),
    HandoverColor: () => import('./icons/HandoverColor.svg?inline'),
    Insurance: () => import('./icons/Insurance.svg?inline'),
    InsuranceColor: () => import('./icons/InsuranceColor.svg?inline'),
    LowProfile: () => import('./icons/LowProfile.svg?inline'),
    LowProfileTransparent: () => import('./icons/LowProfileTransparent.svg?inline'),
    MapOvalMarker: () => import('./icons/MapOvalMarker.svg?inline'),
    MapPinClean: () => import('./icons/MapPinClean.svg?inline'),
    MapPin: () => import('./icons/MapPin.svg?inline'),
    Menu: () => import('./icons/Menu.svg?inline'),
    Mountain: () => import('./icons/Mountain.svg?inline'),
    MyCamperExperience: () => import('./icons/MyCamperExperience.svg?inline'),
    MyCamperExperienceColor: () => import('./icons/MyCamperExperienceColor.svg?inline'),
    MyCamperPersonal: () => import('./icons/MyCamperPersonal.svg?inline'),
    MyCamperPersonalColor: () => import('./icons/MyCamperPersonalColor.svg?inline'),
    OtherCamperTransparent: () => import('./icons/OtherCamperTransparent.svg?inline'),
    Others: () => import('./icons/Others.svg?inline'),
    RedCircle: () => import('./icons/RedCircle.svg?inline'),
    RentingOut: () => import('./icons/RentingOut.svg?inline'),
    RentingOutColor: () => import('./icons/RentingOutColor.svg?inline'),
    SafeAndSound: () => import('./icons/SafeAndSound.svg?inline'),
    SafeAndSoundColor: () => import('./icons/SafeAndSoundColor.svg?inline'),
    Search: () => import('./icons/Search.svg?inline'),
    SearchForItem: () => import('./icons/SearchForItem.svg?inline'),
    SearchForItemColor: () => import('./icons/SearchForItemColor.svg?inline'),
    SelectionOfCampers: () => import('./icons/SelectionOfCampers.svg?inline'),
    SelectionOfCampersColor: () => import('./icons/SelectionOfCampersColor.svg?inline'),
    SendBookingRequest: () => import('./icons/SendBookingRequest.svg?inline'),
    SendBookingRequestColor: () => import('./icons/SendBookingRequestColor.svg?inline'),
    Shape: () => import('./icons/Shape.svg?inline'),
    SocialMedia: () => import('./icons/SocialMedia.svg?inline'),
    Star: () => import('./icons/Star.svg?inline'),
    Team: () => import('./icons/Team.svg?inline'),
    TeamColor: () => import('./icons/TeamColor.svg?inline'),
    Testimonials: () => import('./icons/Testimonials.svg?inline'),
    TestimonialsColor: () => import('./icons/TestimonialsColor.svg?inline'),
    Transport: () => import('./icons/Transport.svg?inline'),
    Twitter: () => import('./icons/Twitter.svg?inline'),
    arrow: () => import('./icons/arrow.svg?inline'),
    check: () => import('./icons/check.svg?inline'),
    close: () => import('./icons/close.svg?inline'),
    flash: () => import('./icons/flash.svg?inline'),
    heart: () => import('./icons/heart.svg?inline'),
    heart_active: () => import('./icons/heart_active.svg?inline'),
    info: () => import('./icons/info.svg?inline'),
    next: () => import('./icons/next.svg?inline'),
    place: () => import('./icons/place.svg?inline'),
    placeholder: () => import('./icons/placeholder.svg?inline'),
    prev: () => import('./icons/prev.svg?inline'),
    top: () => import('./icons/top.svg?inline'),
    triangle: () => import('./icons/triangle.svg?inline'),
    verified: () => import('./icons/verified.svg?inline'),
    verifiednew: () => import('./icons/verifiednew.svg?inline'),
    Seat: () => import('./icons/Seat.svg?inline'),    
    BedSolid: () => import('./icons/BedSolid.svg?inline'),    
    Available: () => import('./icons/Available.svg?inline'),  
  };
  export default {
    components,
    props: {
      icon: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: 'auto',
      },
      height: {
        type: String,
        default: 'auto',
      },
      strokeWidth: {
        type: String,
        default: '',
      },
      fill: {
        type: null,
        default: null,
      },
      color: {
        type: String,
        default: '',
      },
      noStyle: {
        type: Boolean,
        default: false,
      },
      classes: {
        type: String,
        default: '',
      },
    },
    computed: {
      style() {
        if (this.noStyle) return {};

        let width = (!isNaN(this.width) ? this.width + 'px' : this.width);
        let height = (!isNaN(this.height) ? this.height + 'px' : this.height);
        let css = {
          width: width,
          height: height,
        };

        if (this.strokeWidth) {
          css[ 'stroke-width' ] = this.strokeWidth;
        }
        if (this.color) {
          css[ 'color' ] = this.color;
          css[ 'stroke' ] = this.color;
          css[ 'fill' ] = this.color;
        }
        if (this.fill || this.fill === false) {
          if (this.fill === false) {
            css[ 'fill' ] = 'transparent';
          }
          else {
            css[ 'fill' ] = this.fill;
          }
        }

        return css;
      }
    },
  };
</script>

<style scoped>
  .svg-icon {
    display: inline-block;
    pointer-events: none;
    overflow: visible;
  }
</style>
