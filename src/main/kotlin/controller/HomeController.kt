package com.miv.website.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HomeController {

    @GetMapping("/")
    fun index(): String {
        return "index"  
    }

    @GetMapping("/signup")
    fun signUp(): String {
        return "page/signup"
    }

    @GetMapping("/campaign/product-list")  
        fun campaignProductList(): String {
        return "page/campaign/product_list" 
    }

    @GetMapping("/campaign/location-list")  
        fun campaignLocationList(): String {
        return "page/campaign/location_list" 
    }
}
