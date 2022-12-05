package com.example.reactjs;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@Controller
public class MainController {



    @RestController
    public class WebProjectController {
        @GetMapping("/main")
        public String hello() {
            return "안녕하세요. 현재 서버시간은 " + new Date() + "입니다. \n";
        }
    }
}
