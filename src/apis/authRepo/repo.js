import apiNames from '../apiNames';
import {Repository, SecureRepository} from '../baseURLRepo';

export default {
  loginApi(payload) {
    return Repository.post(apiNames, payload);
  },
  registrationApi(payload) {
    return apiNames.vendors
    return SecureRepository.post(apiNames.registration, payload);
  },
};
