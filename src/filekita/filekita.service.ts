import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from './entities/filekita.entity';
import { FilekitaDTO } from './dto/filekita.dto';

@Injectable()
export class FileKitaService {
    constructor(
        @InjectRepository(FileKita)
        private fileKitaRepository: Repository<FileKita>
    ) {}

    async showAll() {
        return await this.fileKitaRepository.find();
    }

    async lihatSemua() {
        return "ini di service";
    }

    async membuatRecord(data: FilekitaDTO) {
        return await this.fileKitaRepository.save(data);
    }

    async lihatPerRecord(id: number) {
        return await this.fileKitaRepository.findOne({ where: { id } });
    }

    async update(id: number, data: Partial<FilekitaDTO>) {  
        await this.fileKitaRepository.update({ id }, data);  
        return await this.fileKitaRepository.findOne({ where: { id } });  
    }

    async hapusData(id: number) {  
        await this.fileKitaRepository.delete({ id });  
        return { deleted: true };  
    }  
}