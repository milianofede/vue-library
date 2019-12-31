<template>
  <component :is="icon"
             :class="'svg-icon' + classes"
             :style="style" />
</template>

<script>
  const components = {
    AClass: () => import('../../assets/icons/AClass.svg?inline'),
    AClassTransparent: () => import('../../assets/icons/AClassTransparent.svg?inline'),
    ArrowDown: () => import('../../assets/icons/ArrowDown.svg?inline'),
    ArrowLeft: () => import('../../assets/icons/ArrowLeft.svg?inline'),
    ArrowRight: () => import('../../assets/icons/ArrowRight.svg?inline'),
    ArrowTo: () => import('../../assets/icons/ArrowTo.svg?inline'),
    Bed: () => import('../../assets/icons/Bed.svg?inline'),
    BookFill: () => import('../../assets/icons/BookFill.svg?inline'),
    Cal: () => import('../../assets/icons/Cal.svg?inline'),
    CampingBus: () => import('../../assets/icons/CampingBus.svg?inline'),
    CampingBusTransparent: () => import('../../assets/icons/CampingBusTransparent.svg?inline'),
    Caravan: () => import('../../assets/icons/Caravan.svg?inline'),
    CaravanTransparent: () => import('../../assets/icons/CaravanTransparent.svg?inline'),
    Carseat: () => import('../../assets/icons/Carseat.svg?inline'),
    HollowCircle: () => import('../../assets/icons/HollowCircle.svg?inline'),
    ClarifyDetailsAndConfirm: () => import('../../assets/icons/ClarifyDetailsAndConfirm.svg?inline'),
    ClarifyDetailsAndConfirmColor: () => import('../../assets/icons/ClarifyDetailsAndConfirmColor.svg?inline'),
    Coachbuilt: () => import('../../assets/icons/Coachbuilt.svg?inline'),
    CoachbuiltTransparent: () => import('../../assets/icons/CoachbuiltTransparent.svg?inline'),
    Delete: () => import('../../assets/icons/Delete.svg?inline'),
    DiscussIssue: () => import('../../assets/icons/DiscussIssue.svg?inline'),
    DotFill: () => import('../../assets/icons/DotFill.svg?inline'),
    DotOutline: () => import('../../assets/icons/DotOutline.svg?inline'),
    FairAndLocal: () => import('../../assets/icons/FairAndLocal.svg?inline'),
    FairAndLocalColor: () => import('../../assets/icons/FairAndLocalColor.svg?inline'),
    Flash2: () => import('../../assets/icons/Flash2.svg?inline'),
    Handover: () => import('../../assets/icons/Handover.svg?inline'),
    HandoverColor: () => import('../../assets/icons/HandoverColor.svg?inline'),
    Insurance: () => import('../../assets/icons/Insurance.svg?inline'),
    InsuranceColor: () => import('../../assets/icons/InsuranceColor.svg?inline'),
    LowProfile: () => import('../../assets/icons/LowProfile.svg?inline'),
    LowProfileTransparent: () => import('../../assets/icons/LowProfileTransparent.svg?inline'),
    MapOvalMarker: () => import('../../assets/icons/MapOvalMarker.svg?inline'),
    MapPinClean: () => import('../../assets/icons/MapPinClean.svg?inline'),
    MapPin: () => import('../../assets/icons/MapPin.svg?inline'),
    Menu: () => import('../../assets/icons/Menu.svg?inline'),
    Mountain: () => import('../../assets/icons/Mountain.svg?inline'),
    MyCamperExperience: () => import('../../assets/icons/MyCamperExperience.svg?inline'),
    MyCamperExperienceColor: () => import('../../assets/icons/MyCamperExperienceColor.svg?inline'),
    MyCamperPersonal: () => import('../../assets/icons/MyCamperPersonal.svg?inline'),
    MyCamperPersonalColor: () => import('../../assets/icons/MyCamperPersonalColor.svg?inline'),
    OtherCamperTransparent: () => import('../../assets/icons/OtherCamperTransparent.svg?inline'),
    Others: () => import('../../assets/icons/Others.svg?inline'),
    RedCircle: () => import('../../assets/icons/RedCircle.svg?inline'),
    RentingOut: () => import('../../assets/icons/RentingOut.svg?inline'),
    RentingOutColor: () => import('../../assets/icons/RentingOutColor.svg?inline'),
    SafeAndSound: () => import('../../assets/icons/SafeAndSound.svg?inline'),
    SafeAndSoundColor: () => import('../../assets/icons/SafeAndSoundColor.svg?inline'),
    Search: () => import('../../assets/icons/Search.svg?inline'),
    SearchForItem: () => import('../../assets/icons/SearchForItem.svg?inline'),
    SearchForItemColor: () => import('../../assets/icons/SearchForItemColor.svg?inline'),
    SelectionOfCampers: () => import('../../assets/icons/SelectionOfCampers.svg?inline'),
    SelectionOfCampersColor: () => import('../../assets/icons/SelectionOfCampersColor.svg?inline'),
    SendBookingRequest: () => import('../../assets/icons/SendBookingRequest.svg?inline'),
    SendBookingRequestColor: () => import('../../assets/icons/SendBookingRequestColor.svg?inline'),
    Shape: () => import('../../assets/icons/Shape.svg?inline'),
    SocialMedia: () => import('../../assets/icons/SocialMedia.svg?inline'),
    Star: () => import('../../assets/icons/Star.svg?inline'),
    Team: () => import('../../assets/icons/Team.svg?inline'),
    TeamColor: () => import('../../assets/icons/TeamColor.svg?inline'),
    Testimonials: () => import('../../assets/icons/Testimonials.svg?inline'),
    TestimonialsColor: () => import('../../assets/icons/TestimonialsColor.svg?inline'),
    Transport: () => import('../../assets/icons/Transport.svg?inline'),
    Twitter: () => import('../../assets/icons/Twitter.svg?inline'),
    arrow: () => import('../../assets/icons/arrow.svg?inline'),
    check: () => import('../../assets/icons/check.svg?inline'),
    close: () => import('../../assets/icons/close.svg?inline'),
    flash: () => import('../../assets/icons/flash.svg?inline'),
    heart: () => import('../../assets/icons/heart.svg?inline'),
    heart_active: () => import('../../assets/icons/heart_active.svg?inline'),
    info: () => import('../../assets/icons/info.svg?inline'),
    next: () => import('../../assets/icons/next.svg?inline'),
    place: () => import('../../assets/icons/place.svg?inline'),
    placeholder: () => import('../../assets/icons/placeholder.svg?inline'),
    prev: () => import('../../assets/icons/prev.svg?inline'),
    top: () => import('../../assets/icons/top.svg?inline'),
    triangle: () => import('../../assets/icons/triangle.svg?inline'),
    verified: () => import('../../assets/icons/verified.svg?inline'),
    verifiednew: () => import('../../assets/icons/verifiednew.svg?inline'),
    Seat: () => import('../../assets/icons/Seat.svg?inline'),    
    BedSolid: () => import('../../assets/icons/BedSolid.svg?inline'),    
    Available: () => import('../../assets/icons/Available.svg?inline'),  
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
