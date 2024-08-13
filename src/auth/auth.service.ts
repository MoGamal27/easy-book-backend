import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from '../auth/entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
      }
    
      async create(user: User): Promise<User> {
        return this.userRepository.save(user);
      }

      async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.findOneByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
          return user;
        }
        return null;
      }
    }



