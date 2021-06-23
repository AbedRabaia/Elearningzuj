// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.zujapps.elearning';
    static appname = 'Elearning.ZUJ';
    static desktopappname = 'Elearning.ZUJ';
    static versioncode = 1;
    static versionname = '1.0.0';
    static cache_update_frequency_usually = 420000;
    static cache_update_frequency_often = 1200000;
    static cache_update_frequency_sometimes = 3600000;
    static cache_update_frequency_rarely = 43200000;
    static default_lang = 'en';
    static languages: any = {
        ar: 'عربي',
        en: 'English',
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites: any = {
    };
    static font_sizes: any = [
        62.5,
        75.89,
        93.75,
    ];
    static customurlscheme = 'ZUJapp';
    static siteurl = 'https://elearning.zuj.edu.jo';
    static sitename = 'Elearning.ZUJ';
    static multisitesdisplay = '';
    static sitefindersettings: any = {
    };
    static onlyallowlistedsites = false;
    static skipssoconfirmation = false;
    static forcedefaultlanguage = false;
    static privacypolicy = 'https://moodle.net/moodle-app-privacy/';
    static notificoncolor = '#5a6470';
    static statusbarbg = false;
    static statusbarlighttext = false;
    static statusbarbgios = '#5a6470';
    static statusbarlighttextios = true;
    static statusbarbgandroid = '#5a6470';
    static statusbarlighttextandroid = true;
    static statusbarbgremotetheme = '#000000';
    static statusbarlighttextremotetheme = true;
    static enableanalytics = false;
    static enableonboarding = true;
    static forceColorScheme = '';
    static forceLoginLogo = false;
    static ioswebviewscheme = 'moodleappfs';
    static appstores: any = {
        android: 'com.zujapps.elearning',
        ios: 'id633359593',
        windows: 'moodle-desktop/9p9bwvhdc8c8',
        mac: 'id1255924440',
        linux: 'https://download.moodle.org/desktop/download.php?platform=linux&arch=64',
    };
    static compilationtime = 1624201251880;
    static lastcommit = '';
}
