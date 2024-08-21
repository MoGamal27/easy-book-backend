import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { IAthenticate } from './interface/Role';
import { User } from './entities/auth.entity';
import { BcryptService } from './bcrypt.service';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
     constructor(
        private readonly bcryptService: BcryptService,
        //private readonly IAthenticate: IAthenticate,
        @InjectRepository(User) private readonly userRepository: Repository<User>,

     ) {}

   

     /**
      * 
      * @param SignupDto -The signup form data
     * @returns The user and the JWT token
      */
    async signUp(SignupDto: SignupDto): Promise<any> {
        const { name, email, password, role } = SignupDto;
        console.log(name, email, password, role)

        const userExists = await this.userRepository.findOneBy({ email });

        if(userExists) {
            throw new Error('User already exists');
        }

           
          const hashedPassword = await this.bcryptService.hash(password);
        
            const user = new User()
            user.name = name
            user.email = email;
            user.password = hashedPassword;
            user.role = role
            await this.userRepository.save(user)
            
        console.log(user)

            const token = sign({ id: user.id, role: user.role }, 'secret', { expiresIn: '1h' });
            return { user, token };
            
    }


    /**
     * Sign in
     * @param signinDto - The signin form data
     * @returns The user and the JWT token
     */
    async signIn(signinDto: SigninDto): Promise<IAthenticate> {
        const user = await this.userRepository.findOneBy({ email: signinDto.email });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const passwordValid = await this.bcryptService.compare(
            signinDto.password,
            user.password
        );
        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const token = sign({ id: user.id, role: user.role }, 'secret', { expiresIn: '1h' });
        return { user, token };
    }

    async getProfile(userId: number): Promise<User> {
        
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
    
}
