/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const company = new Company();

const map = new Map("map");
const user = new User();
map.addUserMarker(user);
