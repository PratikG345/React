import React, { useState } from "react";
import ReactDom from "react-dom/client"; 

const Header = () =>{
    return(
    <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

const resObj = [
                  {
                    "info": {
                      "id": "71010",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/6028eb63-2e65-4f77-85a8-ff251459340e_71010.jpg",
                      "locality": "Shivaji Nagar",
                      "areaName": "Pathardi Phata",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "8.2K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/pizza-hut-shivaji-nagar-pathardi-phata-rest71010",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "69634",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/5004c3f5-710e-4f81-b800-756db91f2a6e_69634.jpg",
                      "locality": "Hotel Satvik",
                      "areaName": "Nashik Road",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2456",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5.1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 01:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "Ratnesh_Badges/free%20del%20icon.png",
                            "shortDescription": "Free Delivery",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "Ratnesh_Badges/free%20del%20icon.png",
                                  "shortDescription": "Free Delivery"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹1199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "2.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/dominos-pizza-hotel-satvik-nashik-road-rest69634",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "235624",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_235624.JPG",
                      "locality": "Collage Road \n",
                      "areaName": "College Road",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.1,
                      "parentId": "547",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "7.6K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/kfc-collage-road-college-road-rest235624",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "70995",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70995.JPG",
                      "locality": "Patil Colony",
                      "areaName": "Ramdas Colony",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "33K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/burger-king-patil-colony-ramdas-colony-rest70995",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "71321",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/839ee2a9-5cc7-496a-accd-db3c3a9baf92_71321.jpg",
                      "locality": "College Road",
                      "areaName": "College Road",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "15K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 01:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "4.6K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/mcdonalds-college-road-rest71321",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "444011",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "hccqln3kaptyyazgjbrx",
                      "locality": "BYK College",
                      "areaName": "Krishi Nagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "4961",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹159"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "939"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/la-pinoz-pizza-byk-college-krishi-nagar-rest444011",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "263796",
                      "name": "Pure Veg Meals by Lunchbox",
                      "cloudinaryImageId": "vazntaeqh5gxqreksboe",
                      "locality": "OPP BYK COLLEGE",
                      "areaName": "HATTE NAGAR",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "21938",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "362",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/pure-veg-meals-by-lunchbox-opp-byk-college-hatte-nagar-rest263796",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "296021",
                      "name": "Kaka Ka Dhaba",
                      "cloudinaryImageId": "apvbfhijubw2f1y2iyyu",
                      "locality": "Panchavati",
                      "areaName": "Panchavati",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Mughlai",
                        "Mongolian",
                        "Hyderabadi"
                      ],
                      "avgRating": 4.4,
                      "parentId": "113689",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "9.3K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "5.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/kaka-ka-dhaba-panchavati-rest296021",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "745614",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
                      "locality": "NEAR LIONS CLUB GARDEN",
                      "areaName": "New Pandit Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Fast Food",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "11633",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.4K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:01:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/olio-the-wood-fired-pizzeria-near-lions-club-garden-new-pandit-colony-rest745614",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "682523",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "9222019938518b7ebe87fa1c2ae382e4",
                      "locality": "SHARANPUR ROAD",
                      "areaName": "CANADA CORNER",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "137",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/grameen-kulfi-sharanpur-road-canada-corner-rest682523",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "69524",
                      "name": "Dairy Don (Mg Road)",
                      "cloudinaryImageId": "ti09r9frlcdedbdqdr3k",
                      "areaName": "MG Road",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "6931",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/dairy-don-mg-road-mg-road-rest69524",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "145611",
                      "name": "Kokni Darbar",
                      "cloudinaryImageId": "rfcfoudtda1n7qqgbi4c",
                      "locality": "Nashik Road",
                      "areaName": "Doodh Bazar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.3,
                      "parentId": "119732",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "11K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "4.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/kokni-darbar-road-doodh-bazar-rest145611",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "347938",
                      "name": "Greenfields Krishna",
                      "cloudinaryImageId": "f8kbwe575njqgm3opesf",
                      "areaName": "Indira Nagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Chinese",
                        "Fast Food",
                        "Pizzas",
                        "Snacks",
                        "Chaat",
                        "Juices",
                        "Pastas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "90470",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "6.0K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/greenfields-krishna-indira-nagar-rest347938",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "278323",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/66ce099e-fa79-45a6-b439-86a596d7b0f8_278323.JPG",
                      "locality": "Ashoka Marg",
                      "areaName": "Dwarka",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "947",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/theobroma-ashoka-marg-dwarka-rest278323",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "664871",
                      "name": "Kwality Walls Ice Cream and More",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/558ecdec-88de-4d27-94fa-dfeccd817c73_664871.JPG",
                      "locality": "Panchavati",
                      "areaName": "Nas_RTO Circle",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "582",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "450",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/kwality-walls-ice-cream-and-more-panchavati-nas-rto-circle-rest664871",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "88667",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "nsradzgefubdccpfwop6",
                      "locality": "College Road",
                      "areaName": "College Road",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "parentId": "2093",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "5.2K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "3.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/natural-ice-cream-college-road-rest88667",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "322220",
                      "name": "Chirag Biryani (Rk)",
                      "cloudinaryImageId": "bfsiqynyrr2jblvt5ajn",
                      "locality": "Bombay Naka",
                      "areaName": "Ravivar Karanja",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Indian",
                        "Thalis",
                        "North Indian",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "62171",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.9K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 21:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "25% OFF",
                        "subHeader": "UPTO ₹65"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/chirag-biryani-rk-bombay-naka-ravivar-karanja-rest322220",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "174465",
                      "name": "Mayur Lunch Home",
                      "cloudinaryImageId": "eel5uvix0usjkhh4ybbq",
                      "locality": "Raviwar Peth",
                      "areaName": "Ashok Stambh",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Maharashtrian",
                        "North Indian",
                        "Punjabi",
                        "Snacks",
                        "Thalis"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "133981",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "5.0K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/mayur-lunch-home-raviwar-peth-ashok-stambh-rest174465",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "175814",
                      "name": "Chote Miya Restaurant",
                      "cloudinaryImageId": "rc9zxygznonfqjfrgxqr",
                      "locality": "Trimbak Road",
                      "areaName": "Doodhbazaar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Mughlai",
                        "Chinese",
                        "Afghani"
                      ],
                      "avgRating": 4.3,
                      "parentId": "453234",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.6K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-16 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/chote-miya-restaurant-trimbak-road-doodhbazaar-rest175814",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "285429",
                      "name": "Tushar Pav Bhaji",
                      "cloudinaryImageId": "ybgn2vtomxhmvvbuimmf",
                      "areaName": "College Road",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Snacks",
                        "Chinese",
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "218549",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "4.2K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-15 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e9144a5-862d-44b5-841b-faebf4483f5d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/nashik/tushar-pav-bhaji-college-road-rest285429",
                      "type": "WEBLINK"
                    }
                  }
                ];

const RestuarantCard = (props) =>{
    const {resData} = props

    const{name,cloudinaryImageId, avgRating, deliveryTime, totalRatingsString, costForTwo, areaName, cuisines} = resData?.info;  // ?. optional chaining
    return(
        <div className="res-card">
            <img className="res-image"src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <div className="card1">
                <p>{avgRating}</p>
                <p>{deliveryTime}</p>
                <p>{totalRatingsString}</p>
                <p>{costForTwo}</p>
                <p>{areaName}</p>
            </div>
            <p>{cuisines.join(", ")}</p>
        </div>

        
    )
}

const Body =() =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map((restaurant) => (
                  <RestuarantCard key="resData.info.id" resData ={restaurant}/>
                ))}

            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)